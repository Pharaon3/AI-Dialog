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

driver.get("https://deepmind.google/")
time.sleep(3)

current_datetime = datetime.now()
formatted_datetime = current_datetime.strftime("%Y/%m/%d %H:%M:%S")

outData = []
elements = driver.find_elements(By.CSS_SELECTOR, "a.glue-card")
for c in range(0, len(elements)):
    try:
        link = elements[c].get_attribute('href')
        source = elements[c].find_element(By.TAG_NAME, "source").get_attribute('srcset')
        title = elements[c].find_element(By.CSS_SELECTOR, "p.glue-headline").get_attribute('innerHTML')
        content = elements[c].find_element(By.CSS_SELECTOR, "p.glue-card__description").get_attribute('innerHTML')
        print("link: " + link)
        print("source: " + source)
        print("title: " + title)
        print("content: " + content)
        outData.append({"link": link, "imgSource": source, "title": title, "content": content, "time": formatted_datetime})
    except:
        print("error")
driver.close()

with open("scaned deepmind google.json", "w") as file:
    json.dump(outData, file)
driver.quit()
