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

driver.get("https://zapier.com/blog/all-articles/")
time.sleep(3)

current_datetime = datetime.now()
formatted_datetime = current_datetime.strftime("%Y/%m/%d %H:%M:%S")

outData = []
elements = driver.find_elements(By.CSS_SELECTOR, "div.css-dhcu7d")
print(len(elements))
for c in range(0, len(elements)):
    try:
        imgSource = elements[c].find_element(By.TAG_NAME, "img").get_attribute('src')
        link = elements[c].find_elements(By.TAG_NAME, "a")[1].get_attribute('href')
        # link = elements[c].find_element(By.CSS_SELECTOR, "a.css-5ym87d-Nav__link").get_attribute('href')
        title = elements[c].find_element(By.CSS_SELECTOR, "p.css-xlmxz8").get_attribute('innerHTML')
        content = elements[c].find_element(By.CSS_SELECTOR, "p.css-933b07").get_attribute('innerHTML')
        print("link: " + link)
        print("imgSource: " + imgSource)
        print("title: " + title)
        print("content: " + content)
        outData.append({"link": link, "imgSource": imgSource, "title": title, "content": content, "time": formatted_datetime})
        # outData.append({"link": link, "imgSource": imgSource, "time": formatted_datetime})
    except:
        print("error")
driver.close()

with open("scaned zapier.json", "w") as file:
    json.dump(outData, file)
driver.quit()