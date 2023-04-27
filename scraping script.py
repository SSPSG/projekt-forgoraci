import requests
from bs4 import BeautifulSoup
import time


url = 'https://www.csfd.cz/uzivatel/195357-verbal/recenze/'

response = requests.get(url, headers = {'User-agent': 'your bot 0.1'})
# html_content = response.text
html_content = response.text
time.sleep(2)  

soup = BeautifulSoup(html_content, 'html.parser')
articles = soup.find_all('div', {'class': 'user-reviews-text'})
print(articles)

for article in articles:
    print(article.text)



