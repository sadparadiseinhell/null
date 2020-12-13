![Preview](https://github.com/sadparadiseinhell/null/blob/main/assets/null-preview.png)

## Settings
### Links
To add your own link to your favorite site, you just need to add a line to the HTML code, for example:

```html
<a id="github" href="https://www.github.com/">
  <i class="fab fa-github"></i>
</a>
```

### Weather Setting
To display the weather you need to have a free API key, which can be obtained from the [OpenWeatherMap](https://openweathermap.org/api) website.
The resulting key and city name must be added to the corresponding lines of the `weather.js` file:

```js
const key = 'key';
const city_name = 'city name';
```
> If you generated a **new** API key and the weather doesn't work, then try to wait for a while until the key is activated.

### Name Setting
To set the name you need to change the line in the `greeting.js` file:

```js
var name = 'name';
```
