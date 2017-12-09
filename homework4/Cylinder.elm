module Cylinder exposing (..)

new =
  { radius = 1.0, height = 1.0 }

stretch y cylinder =
  { cylinder | height = cylinder.height * y }

widen x cylinder =
  { cylinder | radius = cylinder.radius * x }

volume cylinder =
  pi * cylinder.radius * cylinder.radius * cylinder.height

surfaceArea cylinder =
  2 * pi * cylinder.radius * cylinder.height + 2 * pi * cylinder.radius * cylinder.radius
