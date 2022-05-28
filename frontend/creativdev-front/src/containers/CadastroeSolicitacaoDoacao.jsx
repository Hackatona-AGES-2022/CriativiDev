import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/category";
import { createDonation } from "../services/donation";
import { createSolicitation } from "../services/solicitation";

export const CadastroeSolicitacaoDoacao = () => {
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const getCategoriesResponse = await getAllCategories();
        setCategories(getCategoriesResponse);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      const select = document.getElementById("drop-down");
      const category_id = Number(select.options[select.selectedIndex].value) + 1;
      console.log(category_id);
      const sessionUser = JSON.parse(sessionStorage.getItem("user") || "{}");
      const createPayload = {
        category_id,
        user_id: sessionUser.id,
        description,
      };
      console.log(sessionUser);
      if (sessionUser.type === "DOADOR") await createDonation(createPayload);
      else await createSolicitation(createPayload);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  const styles = {
    body: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    main: {
      width: "50%",
      height: "60%",
      paddingLeft: "30px",
      paddingTop: "30px",
      background: "rgba( 255, 255, 255, 0.35 )",
      backdropFilter: "blur( 13.5px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },

    btn: {
      padding: "10px",
      width: "300px",
      borderRadius: "4px",
      transition: "0.5s ease",
      cursor: "pointer",
      border: "none",
      color: "#fff",
      backgroundColor: "#FF6666",
    },
  };

  return (
    <form style={styles.main} action="">
      <label for="drop-down">Selecione o tipo de equipamento desejado</label>
      <select
        class="form-select"
        aria-label="Default select example"
        id="drop-down"
      >
        <option selected>Selecione</option>
        {categories.map((category, index) => {
          return <option value={index}>{category.name}</option>;
        })}
      </select>
      <br />
      <label for="drop-down">Descreva o produto (especificações...)</label>
      <div class="input-group">
        <textarea
          class="form-control me-4"
          aria-label="With textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <br />
      <input
        style={styles.btn}
        type="submit"
        value="ENVIAR"
        class="btn submit"
        onClick={() => handleSubmit()}
      />
    </form>
  );
};
