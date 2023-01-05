# Module 1

## Tags:

### Paragraph
```html
<p>This is a paragraph</p>
```
### Bold
Storng is the semantic version of bold.
```html
<b>This is bold</b>
<strong>This is strong.</strong>
```
### Italic
Emphesize is the semantic version of italic.
```html
<i>This is italic</i>
<em>This is strong.</em>
```
### Small
```html
<small>This is small</small>
```
### Anchor Tag
```html
<a target="_blank|_self|_parent|_top|framename"></a>
```
### Image path
```html
<img src="https://upload.wikimedia.org" alt="nothing" />
<img src="images/wikimedia.jpg" alt="nothing" />
```
### No closing tag need:
```html
<img />, <br />
```

## Container Tags
### List Tag
```html
<ul>
  <li></li>
  <li>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </li>
</ul>
```
### Div
```html
    <div>
        <h3>My Blog</h3>
    </div>
```
## Inline vs Block

- p is a block tag. This tag keep the content in a different block.
- b, strong, i, em, all these are inline tag. They keep the content in line.

## Form

### Input
``` html
```
``` html
<form>
  <input type="text|password|number|checkbox|date" name="" id="" />

  <!-- textarea -->
  <textarea name="" id="" cols="60" rows="5"> </textarea>

  <!-- Drodown -->
  <select name="" id="">
    <option value="pizza">Pizza</option>
    <option value="burger">Burger</option>
  </select>

  <!-- Button -->
  <input type="submit" value="Submit" />
  <button>Add Me</button>
</form>
```

## Fav Icon
``` html
<link rel="icon" type="image/x-icon" href="images/home.png">
```