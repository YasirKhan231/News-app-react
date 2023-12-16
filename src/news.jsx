export default function News(props) {
  return (
    <div className="news">
      <div className="news-img">
        {props.msg.urlToImage !== null ? (
          <img src={props.msg.urlToImage} />
        ) : (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWieQ-4kYhiLJUdZ8LV3PXqaIg9oqvRk-8Q&usqp=CAU" />
        )}
      </div>
      <h3>{props.msg.title}</h3>
      <p>
        {props.msg.description?.substring(0, 100).concat("...")}
        <a href={props.msg.url} target="not_blank">
          Read more
        </a>
      </p>

      <div className="source">
        <p>Author :{props.msg.author}</p>
        <p>{props.msg.source.name}</p>
      </div>
    </div>
  );
}
