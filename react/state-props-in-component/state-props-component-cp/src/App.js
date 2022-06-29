import React from "react";

export const Item = (props) => {
  // TODO: answer here
  const [item, setItem] = React.useState(0);
  const id = props.id;
  const image = props.image;
  const title = props.title;
  const setTotal = props.setTotal;
  const total = props.total;
  const showAlert = props.showAlert;

  const tambah = () => {
    if (item < 10) {
      setItem(item + 1);
      setTotal(total + 1);
    } else {
      showAlert(true);
    }
  };

  const kurang = () => {
      setItem(item - 1);
      setTotal(total - 1);
  };

  return (
    <div className="each-box">
      <img src={image} alt="each-item" />
      <p>{title}</p>
      <div>
        <button
          aria-label={`minus-button-${id}`}
          onClick={() => {
            // TODO: answer here
            kurang();
          }}
        >
          -
        </button>
        <input
          type="text"
          aria-label={`item-${id}`}
          className={`item-${id}`}
          value={item}
          disabled
        ></input>
        <button
          aria-label={`add-button-${id}`}
          onClick={() => {
            // TODO: answer here
            tambah();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

function App() {
  //Add state for total
  // TODO: answer here
  const [total, setTotal] = React.useState(0);

  const dataDummy = [
    {
      id: "1",
      image: "https://picsum.photos/id/0/150/",
      title: "Laptop",
    },
    {
      id: "2",
      image: "https://picsum.photos/id/1010/150/",
      title: "Buku",
    },
    {
      id: "3",
      image: "https://picsum.photos/id/103/150/",
      title: "Sepatu",
    },
  ];

  const showAlert = (isShow) => {
    if (isShow) {
      alert("Ups, udah kelebihan yaa");
    }
  };

  return (
    <div className="state-props-2" aria-label="AppRoot">
      <h3>Keranjang Belanja</h3>
      <div className="box-container">
        {dataDummy.map((element, index) => (
          // TODO: answer here
          <Item
            key={index}
            id={element.id}
            image={element.image}
            title={element.title}
            showAlert={showAlert}
            setTotal={setTotal}
            total={total}
          />

        ))}
      </div>
      <div className="end-section">
        <h4>
          Kamu udah masukin&nbsp;
          <span className="total-item" aria-label="total-item">
            {total}
          </span>
          &nbsp; barang
        </h4>
      </div>
    </div>
  );
}

export default App;