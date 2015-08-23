# imageZoom

A simple zoom image on hover using only HTML & CSS.

[Demo](http://jsfiddle.net/jamiemaison/dsars0un/)

## Usage
### HTML

Place the following into your `.html` file:
```html
<div class="imgZoom">
    <img src="img/placeholder.jpg">
</div>
```

### CSS

Finally, place the following into your `.css` file:

```css
.imgZoom{
  display: inline-block;
  overflow: hidden;
  padding: 0;
}
.imgZoom img {
  -webkit-transition: all .4s ease;
  -moz-transition: all .4s ease;
  -ms-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
  vertical-align: middle;
}

.imgZoom img:hover {
  -webkit-transform:scale(1.5);
  -moz-transform:scale(1.5);
  -ms-transform:scale(1.5);
  -o-transform:scale(1.5);
  transform:scale(1.5);
}
```
