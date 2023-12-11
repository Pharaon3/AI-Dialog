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
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("https://www.make.com/en/blog")
time.sleep(3)

with open('make1.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    time.sleep(0.3)
    elements = driver.find_elements(By.CSS_SELECTOR, "a.BlogCard_blogCardContainer__Tqb3_ ")
    for c in range(0, len(elements)):
        link = elements[c].get_attribute('href')
        print("link: " + link)
        writer.writerow([link])
driver.close()