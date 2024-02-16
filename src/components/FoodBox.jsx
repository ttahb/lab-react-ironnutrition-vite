import { Card, Col, Button } from "antd";

function FoodBox(props) {
    const { food: { name, calories, image, servings, id } } = props;

    return (
        <Col>
            <Card title={name} style={{ width: 230, height: 320, margin: 20 }}>
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings {servings}</p>
                <p>
                    <b>Total Calories: {servings * calories} </b> kcal
                </p>
                <Button type="primary" onClick={() => props.deleteFood(id)}> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodBox;