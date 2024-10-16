from ghana_nlp import GhanaNLP

api_key =""

nlp = GhanaNLP(api_key)

translation = nlp.translate("How are you?", "en-tw")

print(translation)

