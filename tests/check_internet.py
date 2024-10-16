import requests

# url to check for connectivity feedback
url = "https://www.google.com/"

def check_internet():
    try:
        response = requests.get(url)
        return True
    except:
        return False