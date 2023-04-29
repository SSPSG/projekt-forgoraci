import requests
from bs4 import BeautifulSoup
import time


for i in range(0,231):
    url = f'https://www.csfd.cz/uzivatel/195357-verbal/recenze/?page={i}'

    response = requests.get(url, headers = {'User-agent': 'your bot 0.1'})
    # html_content = response.text
    html_content = response.text
    time.sleep(0.5)  

    soup = BeautifulSoup(html_content, 'html.parser')
    articles = soup.find_all('div', {'class': 'user-reviews-text'})
    film_names = soup.find_all("a", "film-title-name")
    ratings = soup.find_all("span", "stars")
    image_links = soup.find_all("img", alt= "plakát")

    for i in range(0,9):
        print(articles[i].text)

        # získání ratingů, které jsou zapsány jako classa span elemtu
        string_rating = str(ratings[i])
        striped_rating = string_rating.strip("<span class=\"stars- ")
        striped_rating = striped_rating.strip("\"></span>")  
        if "h" in striped_rating:
            striped_rating = striped_rating.strip("h\">") 
        
        # získání odkazu na obrázek ke každé recenzi
        image_string = str(image_links[i])
        image_link = image_string[51:149]

        # zápis do txt fileu
        with open('recenze.txt', "a", encoding="cp65001") as f:
            article = articles[i].text.strip()
            film_name = film_names[i].text.strip()
            f.write(striped_rating + "\n" + film_name +"\n" + article + "\n" + image_link + "\n")







