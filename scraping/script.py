import requests
from bs4 import BeautifulSoup
import time


# for i in range(0,231):
#     url = f'https://www.csfd.cz/uzivatel/195357-verbal/recenze/?page={i}'

#     response = requests.get(url, headers = {'User-agent': 'your bot 0.1'})
#     # html_content = response.text
#     html_content = response.text
#     time.sleep(0.1)  

#     soup = BeautifulSoup(html_content, 'html.parser')
#     articles = soup.find_all('div', {'class': 'user-reviews-text'})
#     film_names = soup.find_all("a", "film-title-name")
#     ratings = soup.find_all("span", "stars")
#     image_links = soup.find_all("img", alt= "plakát")
#     film_links = soup.find_all("a", {'class': 'film-title-name'})

#     for i in range(0,9):
#         print(articles[i].text)

#         film_link = str(film_links[i]).split("/")
#         film_link1 = film_link[1]
#         film_link2 = film_link[2]
#         film_link = film_link1 + "/" + film_link2
#         film_link = "https://www.csfd.cz/" + film_link + "/prehled/" 

#         # with open('filmLinks.txt', "a", encoding="cp65001") as f:
#         #     f.write("\"" + film_link + "\", " + "\n")

#         # získání ratingů, které jsou zapsány jako classa span elemtu
#         # string_rating = str(ratings[i])
#         # striped_rating = string_rating.strip("<span class=\"stars- ")
#         # striped_rating = striped_rating.strip("\"></span>")  
#         # if "h" in striped_rating:
#         #     striped_rating = striped_rating.strip("h\">") 
        
#         # získání odkazu na obrázek ke každé recenzi
#         image_string = str(image_links[i])
#         image_link = image_string[51:149]
#         if "lazy" in image_link:
#             image_link = image_link[20:]

#         # zápis do txt fileu
#         # with open('articles.txt', "a", encoding="cp65001") as f:
#         #     article = articles[i].text.strip()
#         #     f.write("`"+ article + "`,\n")

#         # with open('filmNames.txt', "a", encoding="cp65001") as f:
#         #     film_name = film_names[i].text.strip()
#         #     f.write("`" + film_name + "`, " + "\n")

#         # with open('rating.txt', "a", encoding="cp65001") as f:
#         #     f.write("\"" + striped_rating + "\", " + "\n")

#         with open('images.txt', "a", encoding="cp65001") as f:
#             f.write("`"+ image_link + "`,\n")

        

for i in range(1,2079):
    with open("id.txt", "a", encoding="cp65001") as f:
            f.write("\"" + str(i) + "\"" + "," + "\n")






