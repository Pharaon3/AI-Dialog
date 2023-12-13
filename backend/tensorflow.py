import csv
import threading

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
import pandas as pd
import time
import re
import csv
from datetime import datetime
from datetime import date
import json
from datetime import datetime

options = webdriver.ChromeOptions()
# options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")
options.add_argument("--disable-images")
options.add_argument("--disable-video")
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

current_datetime = datetime.now()
formatted_datetime = current_datetime.strftime("%Y/%m/%d %H:%M:%S")

links = []
with open('tensorflow.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        links.append(row[0])  # Assuming the links are in the first column
        print("link" + row[0])

outData = []
for link in links:
    driver.get(link)
    time.sleep(3)
    elements = driver.find_elements(By.CSS_SELECTOR, "a.tensorsite-card__href")
    for c in range(0, len(elements)):
        link = elements[c].get_attribute('href')
        outData.append({"link": link})
        print("link: " + link)
driver.quit()

with open("./tensorflow.json", "w") as file:
    json.dump(outData, file)
# driver.quit()
