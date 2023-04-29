# Map CMS

**[CMS](https://map-api.ekaterinburg.io/)** | **[Swagger API documentation](https://map-api.ekaterinburg.io/documentation)**

- [x] Houses data
- [x] OKN objects (objects and zones)
- [x] Tourist lines (pink, red, blue)
- [x] Design code objects
- [x] Road cameras
- [x] DTP
- [x] Houses construction types

## Development

Map admin using [Strapi](https://strapi.io/)

1. Install [Docker](https://docs.docker.com/engine/install/)

2. Create `.env` from `.env.example`

3. Run app (it may take a long time at first)
```
make all
```

## About data
All coordinates we get from OSM.
1. Houses data - info about living houses. We get it from [МинЖКХ](https://dom.mingkh.ru) (more trusting) and [ДомаЕкб](https://domaekb.ru). Also manually edited info to make it more correct.
2. OKN objects (objects and zones) - objects we get from [open data](https://opendata.mkrf.ru/opendata/7705851331-egrkn) and filter it for Ekaterinburg city. From [okn.midural](https://okn.midural.ru) we get info about security and protection zone, the territory next to the okn object and updates. Additional info (object status, year) get from [wikivoyage](https://ru.wikivoyage.org/wiki).
3. Tourist lines
Red - use official data [ekbredline](https://www.ekbredline.ru).
Blue - use [tourism.ekburg](http://tourism.ekburg.ru/) and [izi.travel](https://www.izi.travel/ru/085f-mesta-v-ekaterinburge-svyazannye-s-carskoy-semyoy)
Pink - use [yandex collection of objects](https://yandex.ru/maps/discovery/gde-smotret-sovremennoe-ulichnoe-iskusstvo)
4. Cameras Road - [gdecamera](https://gdecamera.ru/)
5. DTP - get car crashes one time in month open data from [dtp-stat](https://dtp-stat.ru/).
6. Houses construction types - it contains 2 tables with data of center and touristic center Ekaterinburg borders. And 2 tables with type of houses and other constuctions (example: Amur Tigers Aviary in zoo) in our city.
7. Not realized yet: [СКДФ](https://xn--m1a.xn--d1aluo.xn--p1ai/opendata) - info about road condition
