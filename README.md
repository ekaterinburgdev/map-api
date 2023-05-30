# Map CMS

CMS for [Map application](https://map.ekaterinburg.io/) using [Strapi](https://strapi.io/)

**[map-api.ekaterinburg.io/api](https://map-api.ekaterinburg.io/api)** | **[Swagger](https://map-api.ekaterinburg.io/documentation)**

## About data
All coordinates we get from [OpenStreetMap.org](https://www.openstreetmap.org/)

### Houses data
Info about living houses from [dom.mingkh.ru](https://dom.mingkh.ru) (more trusting) and [domaekb.ru](https://domaekb.ru). And is manually edited for accuracy.
```
/api/house
```

### OKN objects (objects & zones)
- Objects we get from [open.mkrf.ru](https://opendata.mkrf.ru/opendata/7705851331-egrkn) and filter it for Ekaterinburg city
- From [okn.midural.ru](https://okn.midural.ru) we get info about security and protection zone, the territory next to the okn object and updates. Additional info (object status, year) get from [wikivoyage](https://ru.wikivoyage.org/wiki)
```
/api/okn-objects
/api/okn-protect-zones
/api/okn-security-zones
```

### Tourist lines
- Red from [ekbredline.ru](https://www.ekbredline.ru)
```
/api/red-lines
/api/red-line-lines
```
<br />

- Blue from [tourism.ekburg.ru](http://tourism.ekburg.ru/) and [izi.travel](https://www.izi.travel/ru/085f-mesta-v-ekaterinburge-svyazannye-s-carskoy-semyoy)
```
/api/blue-lines
/api/blue-line-lines
```
<br />

- Pink from [Yandex collection of objects](https://yandex.ru/maps/discovery/gde-smotret-sovremennoe-ulichnoe-iskusstvo)
```
/api/pink-lines
/api/pink-line-lines
```

### Traffic cameras
Traffic police video cameras from [GdeCamera.ru](https://gdecamera.ru/)
```
/api/cameras-roads
```

### Traffic accidents (DTP)
Data on traffic accidents from [dtp-stat.ru](https://dtp-stat.ru/). Updates once of month with [map-updater service](https://github.com/ekaterinburgdev/map-updater)
```
/api/dtps
```

### Houses construction types
It contains 2 tables with data of center and touristic center Ekaterinburg borders. And 3 tables with type of houses and other constuctions (example: `Amur Tigers Aviary in zoo`) in city
```
/api/center-borders
/api/touristic-center-borders

/api/center-constructions-objects
/api/outside-center-constructions-objects
/api/touristic-center-constructions-objects
```

### Design code objects
Design code objects from [map.ekaterinburg.design](https://map.ekaterinburg.design). Updates once of month with [map-updater service](https://github.com/ekaterinburgdev/map-updater)
```
/api/design-codes
```

### Quarter Inspectors
Data on quarterly inspectors from [екатеринбург.рф/справка/квартальные](https://xn--80acgfbsl1azdqr.xn--p1ai/%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0/%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5#tab1)
```
/api/quarter-inspectors
```

## Development

1. Install [Docker](https://docs.docker.com/engine/install/)

2. Create `.env` from `.env.example`

3. Run app (it may take a long time at first)
```
make all
```
