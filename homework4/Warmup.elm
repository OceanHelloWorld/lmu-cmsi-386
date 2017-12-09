-- Hori k hayato and Ocean Zhang

module Warmup exposing (sumOfCubesOfOdds, change, stripQuotes, powers, daysBetween)
import Date exposing (..)
import Date exposing (Month(..))
import Date.Extra as Date exposing (Interval(..))
import String
import List exposing (reverse, map, repeat)

-- Question 1

change : comparable -> Result String ( Int, Int, Int, Int )
change x =
  if x >= 0 then Ok (x // 25, x % 25 // 10, x % 25 % 10 // 5, x % 25 % 10 % 5)
  else
    Err "amount cannot be negative"


-- Question 2

stripQuotes : String -> String
stripQuotes input =
  String.concat <| String.split "'" <| String.concat <| String.split "\"" input


-- Question 3

powers : Int -> Int -> Result String (List Int)
powers base limit =
  if base < 0 then Err "negative base"
    else
      let
        exponential count base =
            if base^count > limit then []
            else base^count :: exponential (count+1) base
      in
        Ok <| exponential 0 base


-- Question 4

isOdd n =
  n % 2 == 1

sumOfCubesOfOdds : List Int -> Int
sumOfCubesOfOdds l =
  l |> List.filter isOdd |> List.map (\x -> x^3) |> List.foldr (+) 0


-- Question 5

daysBetween : String -> String -> Result String Int
daysBetween date1 date2 =
  let
    d1 = Date.fromString date1
    d2 = Date.fromString date2
  in
    case (d1, d2) of
      (Err msg, _) -> Err "first date is invalid"
      (_, Err msg) -> Err "second date is invalid"
      (Ok d1, Ok d2) -> Ok <|
        Date.diff Day
        (d1)
        (d2)
