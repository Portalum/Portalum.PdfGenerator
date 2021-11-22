
# Portalum.PdfGenerator

Portalum.PdfGenerator is a REST Api to create PDF files. 
Under the hood it uses pdfmake (https://github.com/bpampuch/pdfmake) to create the PDF files.
Portalum.PdfGenerator is also available as a docker image (https://hub.docker.com/r/portalum/portalum-pdf-generator).




## Installation

from source:
```
git clone https://github.com/Portalum/Portalum.PdfGenerator.git
cd Portalum.PdfGenerator
npm install
npm run run-ts
```

docker: 
```
docker run -d -p 80:80 ladartha/portalum-pdf-generator:latest
```

docker-compose:
```
version: '3'

services:
  pdf-generator:
      image: ladartha/portalum-pdf-generator:latest
      restart: always
      ports:
        - 80:80

```
## Usage

Portalum.PdfGenerator exposes a swagger ui:

from source:
```
http://localhost/swagger
```

docker:
```
http://server/swagger
```

docker-compose:
```
http://server/swagger
```

generate a simple Pdf:
```
POST http://localhost/pdf

Body
{
    "content": [
		"First paragraph",
		"Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines"
	]
}
```

For more informations about the body values please see: https://pdfmake.github.io/docs/0.1/  
For good examples: http://pdfmake.org/playground.html  
To convert the examples in JSON object you can use: https://www.convertsimple.com/convert-javascript-to-json/
## License

Portalum.PdfGenerator is licensed under the MIT license. [MIT](https://choosealicense.com/licenses/mit/)

For all licences see licences.txt
