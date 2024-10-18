import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlsplit

# The URL of the website you want to scrape
url = 'https://www.worldmapsonline.com/map-outlines/'

# Create a folder to save the images
os.makedirs('public/images/downloaded_images', exist_ok=True)

# Send a request to the website
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find all <a> tags with id="Map_Outlines_img"
    img_links = soup.find_all('a', id='Map_Outlines_img')

    for link in img_links:
        # Get the href attribute (the link to the image)
        img_url = link.get('href')

        if img_url:
            # Get the image name from the URL
            img_name = os.path.basename(urlsplit(img_url).path)

            # Join the base URL with the img_url to form the full URL if necessary
            full_img_url = urljoin(url, img_url)

            # Download the image
            print(f"Downloading {img_name} from {full_img_url}...")
            img_response = requests.get(full_img_url)

            if img_response.status_code == 200:
                # Save the image to the 'downloaded_images' folder
                with open(os.path.join('downloaded_images', img_name), 'wb') as img_file:
                    img_file.write(img_response.content)
                print(f"Saved {img_name}")
            else:
                print(f"Failed to download {img_name}")
else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")