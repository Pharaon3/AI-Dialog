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

driver.get("https://automateio.com/blog/")
time.sleep(3)

current_datetime = datetime.now()
formatted_datetime = current_datetime.strftime("%Y/%m/%d %H:%M:%S")

outData = []
elements = driver.find_elements(By.CSS_SELECTOR, "div.post-desc-wrapper")
print(len(elements))
for c in range(0, len(elements)):
    try:
        title = elements[c].find_element(By.CSS_SELECTOR, "h4.entry-title").text
        titleel = elements[c].find_element(By.CSS_SELECTOR, "h4.entry-title")
        link = titleel.find_element(By.TAG_NAME, "a").get_attribute('href')
        content = elements[c].find_element(By.CSS_SELECTOR, "div.post-excerpt").text
        print("link: " + link)
        outData.append({"link": link, "title": title, "content": content, "time": formatted_datetime})
    except:
        print("error")
driver.close()

with open('../public/scaned automate.json', 'r') as file:
    # Load the JSON data from the file
    origin_data = json.load(file)
existing_array = origin_data
for c in range (0, len(outData)):
    new_object = outData[c]
    title_exists = any(obj["title"] == new_object["title"] for obj in existing_array)
    if not title_exists:
        existing_array.append(new_object)
with open("../public/scaned automate.json", "w") as file:
    json.dump(existing_array, file)
# driver.quit()
