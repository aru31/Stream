This is just for HACTOBERFEST
Stream is a music streaming application made with django, django rest framework and django channels as backend technologies. The frontend part will be made with react.js. Further description will be updated as the app develops.

Steps to Install

```
git clone https://github.com/aru31/Stream.git
```

then in base directory

```
pip install -r requirements.txt
```

and then activate virtual environment.To activate virtual environment
1-virtual "virtualenv_name"
2-source "virtual_name"/bin/activate for LINUX
      OR
  "virtual_name"\Scripts\activate for Windows   

Now to start the django Server

```
python3.6 manage.py runserver
```

and then to start the React Server go to the frontend directory

```
npm start
```
then open the following window in browser on your machine

```
localhost:8000/login
```

and then open stream on

```
localhost:8000/stream
```

Enjoy the Stream App
