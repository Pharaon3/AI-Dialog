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
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

current_datetime = datetime.now()
formatted_datetime = current_datetime.strftime("%Y/%m/%d %H:%M:%S")

links = []
with open('youtubelinks.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        links.append(row[0])  # Assuming the links are in the first column
        print("link" + row[0])

outData = []
for link in links:
    driver.get(link)
    time.sleep(3)
    elements = driver.find_elements(By.CSS_SELECTOR, "a#video-title-link")
    for c in range(0, len(elements)):
        link = elements[c].get_attribute('href')
        label = elements[c].get_attribute('aria-label')
        title = elements[c].get_attribute('title')
        outData.append({"link": link, "content": label, "title": title, "time": formatted_datetime})
        print("link: " + link)
driver.quit()

with open('../public/scaned youtube.json', 'r') as file:
    # Load the JSON data from the file
    origin_data = json.load(file)
existing_array = origin_data
for c in range (0, len(outData)):
    new_object = outData[c]
    title_exists = any(obj["title"] == new_object["title"] for obj in existing_array)
    if not title_exists:
        existing_array.append(new_object)
with open("../public/scaned youtube.json", "w") as file:
    json.dump(existing_array, file)
# driver.quit()
