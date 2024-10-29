function calculateBMR() {
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // Ensure valid inputs
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
        alert("Please enter valid values for age, height, and weight.");
        return;
    }

    // Calculate BMR (Mifflin-St Jeor Equation)
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;

    // Calculate daily calorie intake (assuming sedentary activity level, multiply BMR by 1.2)
    let dailyCalories = bmr * 1.2;

    // Calculate protein requirement (1.6 grams per kg of body weight)
    let protein = weight * 1.6;

    // Determine diet plan based on age ranges
    let dietPlan = '';

    if (age >= 10 && age <= 20) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Whole grain cereal or oats with milk, a boiled egg, and fruit.</p>
            <p><strong>Snack:</strong> A handful of nuts or yogurt.</p>
            <p><strong>Lunch:</strong> Grilled chicken or tofu, whole wheat bread or rice, and vegetables.</p>
            <p><strong>Snack:</strong> Fruit or vegetable sticks with hummus.</p>
            <p><strong>Dinner:</strong> Fish or lean meat, quinoa or brown rice, and a side of vegetables.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Include calcium-rich foods for bone development.</p>`;
    } else if (age >= 21 && age <= 30) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Smoothie with spinach, banana, and protein powder, or eggs with whole grain toast.</p>
            <p><strong>Snack:</strong> Fruit or a protein bar.</p>
            <p><strong>Lunch:</strong> Lean meat, fish, or legumes with salad and quinoa.</p>
            <p><strong>Snack:</strong> Greek yogurt or nuts.</p>
            <p><strong>Dinner:</strong> Stir-fry with chicken or tofu, vegetables, and brown rice.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Ensure protein intake for muscle health and recovery.</p>`;
    } else if (age >= 31 && age <= 40) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Oats with chia seeds, nuts, and berries.</p>
            <p><strong>Snack:</strong> Almonds or fruit.</p>
            <p><strong>Lunch:</strong> Salmon or chicken salad with olive oil and lemon dressing.</p>
            <p><strong>Snack:</strong> Cottage cheese or mixed nuts.</p>
            <p><strong>Dinner:</strong> Grilled turkey or paneer with roasted vegetables and sweet potatoes.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Incorporate fiber-rich foods to support digestion and weight management.</p>`;
    } else if (age >= 41 && age <= 50) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Greek yogurt with honey, flaxseeds, and nuts.</p>
            <p><strong>Snack:</strong> Avocado on whole-grain toast.</p>
            <p><strong>Lunch:</strong> Lentils or chickpeas, whole grains, and a variety of vegetables.</p>
            <p><strong>Snack:</strong> A small portion of dark chocolate or fruit.</p>
            <p><strong>Dinner:</strong> Grilled fish or chicken with quinoa and green vegetables.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Add omega-3-rich foods for heart and brain health.</p>`;
    } else if (age >= 51 && age <= 60) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Smoothie with spinach, banana, chia seeds, and almond milk.</p>
            <p><strong>Snack:</strong> Handful of nuts or seeds.</p>
            <p><strong>Lunch:</strong> Grilled chicken or tofu with a quinoa and vegetable salad.</p>
            <p><strong>Snack:</strong> Whole grain crackers with hummus.</p>
            <p><strong>Dinner:</strong> Baked fish, sweet potatoes, and leafy greens.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Include calcium and vitamin D-rich foods to maintain bone density.</p>`;
    } else if (age >= 61 && age <= 80) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Porridge with berries, nuts, and flaxseeds.</p>
            <p><strong>Snack:</strong> Soft fruit (banana or pear) or yogurt.</p>
            <p><strong>Lunch:</strong> Soup with beans, lentils, or chicken and whole grain bread.</p>
            <p><strong>Snack:</strong> A smoothie or soft nuts (if easy to chew).</p>
            <p><strong>Dinner:</strong> Baked or grilled salmon, steamed vegetables, and a small portion of brown rice.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Focus on softer, fiber-rich foods for easy digestion and support joint health.</p>`;
    } else if (age > 80) {
        dietPlan = `
            <p><strong>Breakfast:</strong> Soft porridge with fruit and nuts.</p>
            <p><strong>Snack:</strong> A smoothie or soft fruits.</p>
            <p><strong>Lunch:</strong> Mashed vegetables with a light protein source like fish or chicken.</p>
            <p><strong>Snack:</strong> Yogurt or soft cheese.</p>
            <p><strong>Dinner:</strong> Light stew with easily digestible vegetables and lean proteins.</p>
            <p><strong>Hydration:</strong> 6-8 glasses of water.</p>
            <p><strong>Special Tip:</strong> Focus on hydration, softer foods for digestion, and nutrient-dense options.</p>`;
    }

    // Display the results in a structured format
    document.getElementById('bmr').textContent = `BMR: ${bmr.toFixed(2)} kcal/day`;
    document.getElementById('calories').textContent = `Daily Calorie Intake: ${dailyCalories.toFixed(2)} kcal/day`;
    document.getElementById('protein').textContent = `Protein Requirement: ${protein.toFixed(2)} grams/day`;
    document.getElementById('dietPlan').innerHTML = dietPlan;

    document.getElementById('result').style.display = 'block';
}
