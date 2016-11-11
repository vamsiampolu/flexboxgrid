Attempt to understand and translate the kristoferjoseph/flexboxgrid repository to css-in-js and use it in vamsiampolu/css-in-js-test.

1. Variables declared in CSS using:

```
:root {
  --variable_name: value;
}
```

A variable in css can be declared for any element, variables are scoped via cascading, so the higher you declare a variable, the more likely it is that it can be available and overridden by lower level definitions of the same variable. To access a variable once it is defined:

```
.selector-combo {
  prop:var(--variable_name)
}
```

2. `calc` in CSS:

In order to do computations in CSS, use `calc`, its superpower is the ability to interpolate unit systems, esp. useful when dealing with `em` and `rem` with either `%` or `px` because the former cannot be determined in `px` in advance but depend on the font size.

The declarations for `top-xs`, `top-md`, `top-lg` are the same, similarly for `middle` and `bottom` definitions. They should be `DRY`ed out??

Definitions for `col-xs` cascade and clash with definitions for `col-xs` defined later. Why define clashing properties, me so confuze?
