from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time

file = open("./script.js")
script = file.read() 

sitesFile = open('./sites.txt', 'r')
sites = sitesFile.read()

outputFile = open("./output.json", "w")

sitesArray = [str(x) for x in sites.strip().split(',')]

driver = webdriver.Chrome()

personData = []

total = len(sitesArray)

for i in sitesArray:
    try:
        driver.get(i)

        WebDriverWait(driver, 10).until(lambda driver: driver.execute_script('return document.readyState') == 'complete')
        time.sleep(5)

        data = (driver.execute_script(script))
        print(data)

        personData += data
    except:
        print("error")

outputFile.write(json.dumps(personData))
