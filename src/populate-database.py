# script to populate the data base from a .csv file

from google.cloud import firestore

db = firestore.Client(project='randomfitness')

print(db)


doc_ref = db.collection(u'urls').document(u'1')
doc_ref.set({
    u'URL': u'https://www.youtube.com/watch?v=ibGsVS3LChg'
})

users_ref = db.collection(u'urls')
docs = users_ref.stream()

for doc in docs:
    print(f'{doc.id} => {doc.to_dict()}')
