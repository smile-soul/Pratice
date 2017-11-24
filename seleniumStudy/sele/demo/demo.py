from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
cookie = {'name':'access_token','value':'4cbe0dc8-1bf0-4efa-962a-6d54b74c1b9c'}
driver.add_cookie(cookie)
driver.get("http://localhost:9090")
elem = driver.find_element_by_class_name("m-wrap")
elem.send_keys("admin")
elems= driver.find_element_by_id("password")
elems.send_keys("admin")

elemm = driver.find_element_by_class_name("btn")
elemm.send_keys(Keys.RETURN)

driver.close()