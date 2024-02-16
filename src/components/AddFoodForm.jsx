import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        //add food to the list
        props.addFood({ name, image, calories, servings });

        //reset state
        setName('');
        setImage('');
        setCalories('');
        setServings('');

    }

    return (
        <div>
            <Divider>Add Food Entry</Divider>
            <h4>Add Food</h4>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Name:</label>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameInput}
                        style={{ width: 230, height: 20, margin: 10 }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Image:</label>
                    <Input
                        type="text"
                        name="image"
                        value={image}
                        onChange={handleImageInput}
                        style={{ width: 250, height: 20, margin: 10 }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Calories:</label>
                    <Input
                        type="number"
                        name="calories"
                        value={calories}
                        onChange={handleCaloriesInput}
                        style={{ width: 230, height: 20, margin: 10 }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Servings:</label>
                    <Input
                        type="number"
                        name="servings"
                        value={servings}
                        onChange={handleServingsInput}
                        style={{ width: 230, height: 20, margin: 10 }}
                    />
                </div>

                <Button className="create-btn" type="submit">Create</Button>
            </form>
        </div>

    );
}

export default AddFoodForm;