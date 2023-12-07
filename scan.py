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

options = webdriver.ChromeOptions()
# options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")
# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

print("hello")
links = []
with open('AI prediction Links.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        links.append(row[0])  # Assuming the links are in the first column
        print("link" + row[0])
driver = webdriver.Chrome()  # Replace with the appropriate webdriver for your browser
with open('AI prediction.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    time.sleep(0.3)
    for link in links:
        driver.get(link)
        time.sleep(3)
        title = driver.find_elements(By.CSS_SELECTOR, "h1.ng-binding")
        content = driver.find_elements(By.CSS_SELECTOR, "div.prediction-section-resolution-criteria")
        print("Title: " + title[0].text)
        print("Content: " + content[0].text)
        writer.writerow([title[0].text, content[0].text])
        # Use Selenium to interact with the webpage and scrape the data you need
    driver.quit()


