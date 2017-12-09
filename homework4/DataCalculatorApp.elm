import Html exposing (Html, body, input, text, h1, p)
import Html.Attributes exposing (style, value)
import Html.Events exposing (onInput)
import Date exposing (..)
import Date.Extra as Date exposing (Interval(..))
import Html exposing (text)

type alias Model = { firstDate: String, secondDate: String }
type Msg = ChangeDate1 String | ChangeDate2 String

-- daysBetween : String -> String -> String
-- daysBetween date1 date2 =
--   let
--     d1 = Date.fromString date1
--     d2 = Date.fromString date2
--   in
--     case (d1, d2) of
--       (Err msg, _) -> "first date is invalid"
--       (_, Err msg) -> "second date is invalid"
--       (Ok d1, Ok d2) -> toString
--         (Date.diff Day
--         (d1)
--         (d2))


outputDate: String -> String -> String
outputDate startDate endDate =
    case (Date.fromString startDate, Date.fromString endDate) of
        (Ok w, Ok h) -> "is " ++ toString (Date.diff Day w h) ++ " days."
        (Err s, _) -> s
        (_, Err s) -> s
main: Program Never Model Msg
main =
    Html.beginnerProgram { model = model, view = view, update = update }

model : Model
model = { firstDate = "mm/dd/yyyy", secondDate = "mm/dd/yyyy"}


update : Msg -> Model -> Model
update msg model =
    case msg of
        ChangeDate1 w -> { model | firstDate = w }
        ChangeDate2 h -> { model | secondDate = h }

view : Model -> Html Msg
view model =
    body [style [("textAlign", "center")]]
        [ h1 [] [text "Date Calculator"]
        , p [] [text "From ", input [onInput ChangeDate1, value model.firstDate] []]
        , p [] [text "to ", input [onInput ChangeDate2, value model.secondDate] []]
        , p [] [text <| outputDate model.firstDate model.secondDate]
        ]
