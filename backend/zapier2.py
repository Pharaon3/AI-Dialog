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
# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

current_datetime = datetime.now()
formatted_datetime = current_datetime.strftime("%Y/%m/%d %H:%M:%S")

links = []
titles = []
contents = []
imgSources = []
with open('zapier1.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        links.append(row[0])  # Assuming the links are in the first column
        titles.append(row[1])  # Assuming the links are in the first column
        contents.append(row[2])  # Assuming the links are in the first column
        imgSources.append(row[3])  # Assuming the links are in the first column
        print("link: " + row[0])
driver = webdriver.Chrome()  # Replace with the appropriate webdriver for your browser
outData = []
for c in range (0, len(links)):
    link = links[c]
    title = titles[c]
    content = contents[c]
    imgSource = imgSources[c]
    driver.get(link)
    time.sleep(3)
    content1 = driver.find_elements(By.TAG_NAME, "article")[0].text
    print("link: " + link)
    outData.append({"title": title, "content": content, "content1": content1, "link": link, "imgSource": imgSource, "time": formatted_datetime})
    # Use Selenium to interact with the webpage and scrape the data you need
# with open("make.json", "w") as file:
#     json.dump(outData, file)
# driver.quit()

with open('../public/scaned zapier.json', 'r') as file:
    # Load the JSON data from the file
    origin_data = json.load(file)
existing_array = origin_data
for c in range (0, len(outData)):
    new_object = outData[c]
    title_exists = any(obj["title"] == new_object["title"] for obj in existing_array)
    if not title_exists:
        existing_array.append(new_object)
with open("../public/scaned zapier.json", "w") as file:
    json.dump(existing_array, file)
driver.quit()