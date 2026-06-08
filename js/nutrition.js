import { db } from "./firebase.js";

import {
    collection,
    addDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function savefood() {

    try {

        const food_name = document.getElementById("food_name").value;

        const meal_type = document.getElementById("mealtype").value;

        const meal_time = document.getElementById("mealtime").value;

        const quantity = Number(
            document.getElementById("quantity").value
        );

        const unit = document.getElementById("unit").value;

        const calorie = Number (

            document.getElementById("calorie").value

        );

        const protein = Number (

            document.getElementById("protein").value

        );

        const carb = Number (

            document.getElementById("carb").value
        );

        const fat = Number (

            document.getElementById("fat").value

        );

        const sugar = Number (

            document.getElementById("sugar").value

        );

        const note = document.getElementById("note").value;

        await addDoc(

            collection(db, "nutrition_logs"),

            {
                food_name,
                meal_type,
                meal_time,
                quantity,
                unit,
                calorie,
                protein,
                carb,
                fat,
                sugar,
                note,

                created_at: new Date()
            }
        );

        alert("Food Saved Successfully");

        document.getElementById("food_name").value = "";
        document.getElementById("mealtime").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("unit").value = "";
        document.getElementById("calorie").value = "";
        document.getElementById("protein").value = "";
        document.getElementById("carb").value = "";
        document.getElementById("fat").value = "";
        document.getElementById("sugar").value = "";
        document.getElementById("note").value = "";


    }

    catch (error) {

        console.error(error);
    }

}
window.savefood = savefood;