from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json

file = open("./script.js")
script = file.read() 

sitesFile = open('./sites.txt', 'r')
sites = sitesFile.read()

outputFile = open("./output.json", "w")

sitesArray = [str(x) for x in sites.strip().split(',')]

driver = webdriver.Chrome()

personData = []

for i in sitesArray:
    driver.get(i)
    driver.get_screenshot_as_file("file.png")

    WebDriverWait(driver, 10).until(lambda driver: driver.execute_script('return document.readyState') == 'complete')

    data = json.loads((driver.execute_script(script)))
    for i in data:
        personData.append(i)

print(personData)

outputFile.write(json.dumps(personData))
driver.quit()
