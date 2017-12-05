# lmu-cmsi-386
Programming Language Course

Homework Submission Repository

Ocean


import Html exposing (Html, ol, li, text)
import Html.Attributes exposing (style)
import String
import Html exposing (li, text, ul)
import Html.Attributes exposing (class)
import Http exposing (get, Error, Response, Error(..))

-- Question 1

type Result error value = Ok value | Err error

change x =
  if x > 0 then Ok (x // 25, x % 25 // 10, x % 25 % 10 // 5, x % 25 % 10 % 5)
  else
    Err "amount cannot be negative"

main =
  text (
    toString
      ( change -50
      )
  )


-- Question 2

stripQuotes input =
  text <| String.concat <| String.split "'" <| String.concat <| String.split "\"" input



main = stripQuotes "''\"\"a'''"
