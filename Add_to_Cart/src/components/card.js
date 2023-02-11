import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'


function ProductCard({ item, handleClick }) {
    const { title, description, price, image, category } = item;
  return (
    <Card className='mainCard' style={{ width: '18rem' }}>
      <Card.Img className='cardImg' variant="top" src={image} />
      <Card.Body>
        <Card.Title className='cardTitle'>{title}</Card.Title>
        <Card.Text className='cardDesc'>
          {description}
        </Card.Text>
        <Card.Text className='cardCat'>
        {category}
        </Card.Text >
        <Card.Text className='cardPrice'>
        {price}
        </Card.Text>
        <Button className='cardBtn' onClick={() => handleClick(item)} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;