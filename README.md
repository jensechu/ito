ito
===
[![Build Status](https://travis-ci.org/jensechu/ito.svg?branch=master)](https://travis-ci.org/jensechu/ito)


String formatter for the purpose of printing pretty logs while working with a Tessel.

### Headers
Logs a string with a border underneath.

```
ito.header('Pokemon');

> Pokemon
> =======

```

### Subheader
Logs a string transformed to uppercase.

```
ito.subheader('Studying The Cutest');

> STUDYING THE CUTEST

```

### List
Logs a bulleted list given an array.

```
ito.list(['houndour', 'vulpix', 'eevee', 'mew']);

> • Houndour
> • Vulpix
> • Eevee
> • Mew

```

### Numbered List
Logs a numbered list given an array.

```
ito.numberedList(['houndour', 'vulpix', 'eevee', 'mew']);

> 1. Houndour
> 2. Vulpix
> 3. Eevee
> 4. Mew

```

### Custom List
Logs a custom list given a list style as a string and an array. 
`\u2764` is the unicode heart icon.

```
ito.customList('\u2764', ['houndour', 'vulpix', 'eevee', 'mew']);

> ♥ Houndour
> ♥ Vulpix
> ♥ Eevee
> ♥ Mew

```

### Divider
Logs a divider.

```
ito.divider();

> //==============================
```

### Custom Divider
Logs a custom divider. 

```
ito.customDivider('\u2764');

> //=============================♥
```

```
ito.customDivider('Fire Pokemon');

> //==================Fire Pokemon
```

