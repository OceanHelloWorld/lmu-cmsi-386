# lmu-cmsi-386
Programming Language Course

Homework Submission Repository

Ocean


import Html exposing (li, text, ul)
import Html.Attributes exposing (class)
import Http exposing (get, Error, Response, Error(..))


{-| This snippet uses the <ul> and <li> tags to create an unordered
list of French grocery items. Notice that all occurrences of 'ul'
and 'li' are followed by two lists. The first list is for any HTML
attributes, and the second list is all the HTML nodes inside the
tag.

Et maintenant le voyage au supermarché!

main =
  ul [class "grocery-list"]
    [ li [] [text "Quarters"]
    , li [] [text "Dime"]
    , li [] [text "Nickels"]
    , li [] [text "Pennies"]
    ]
-}


change x =
  (x // 25, x % 25 // 10, x % 25 % 10 // 5, x % 25 % 10 % 5)


main =
  text (
    toString
      ( change -50
      )
  )
