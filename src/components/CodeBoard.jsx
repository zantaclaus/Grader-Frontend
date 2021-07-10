import React from "react";
import { useState } from "react";
import "../css/codeBoard.css";

function CodeBoard(props) {
  const [linkActive, setlinkActive] = useState(1);
  const arrCode = [1, 2, 3, 4, 5];

  const toggleLink = (num) => {
    setlinkActive(num);
  };

  return (
    <div className="codeBoard__container">
      <div className="codeBoard__title">TOP 5 FIRST SUBMITTED</div>
      <div className="codeBoard__grid">
        <div className="codeBoard__left">
          <ul className="codeBoard__link__group">
            {arrCode.map((code) => (
              <li
                onClick={() => toggleLink(code)}
                className={
                  code === linkActive
                    ? "codeBoard__link codeBoard__link--active"
                    : "codeBoard__link"
                }
              >
                #{code}
              </li>
            ))}
          </ul>
        </div>
        <div className="codeBoard__right">
          {linkActive === 1 && (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              perferendis tempore similique ad explicabo saepe omnis blanditiis
              distinctio ullam voluptatem. Repudiandae accusamus dolore quo
              facere cumque labore fugit odio in. Voluptatem labore facilis quas
              dolores iusto, a nemo, enim veniam tempore omnis delectus possimus
              expedita earum ut excepturi natus blanditiis ab ipsum dicta velit
              laudantium sint ratione! Inventore, quos eveniet? Dolorum
              voluptatibus nesciunt accusantium commodi molestiae eius nobis
              consequuntur tempore deleniti. Quibusdam, deserunt sed, sint
              laboriosam eligendi doloremque numquam pariatur, ea tempora
              incidunt expedita atque saepe sequi ratione quos facere. Tempore
              provident nemo sapiente molestias ratione possimus! Nihil corporis
              quasi consequuntur, odio labore architecto impedit id? Ipsam magni
              similique distinctio nesciunt minus eius, optio iste fugit velit,
              assumenda, excepturi animi? Eligendi distinctio quo aliquid et
              ipsum placeat. Nihil nobis, eum repellat aperiam iure odio! Unde
              ut cum, vitae possimus ab harum molestias, dolore repudiandae
              labore esse commodi distinctio eum incidunt? Tempore molestias
              culpa consectetur soluta consequuntur eaque maxime rerum fugit
              quam. Cupiditate, incidunt. Dolor in enim reiciendis eum nam
              accusamus sint nesciunt unde tenetur soluta ea voluptatum odio,
              ipsa distinctio. Nesciunt aspernatur culpa ea quod? Eum est
              doloremque dolores assumenda vel reprehenderit, ut maxime! Impedit
              sed tempore repudiandae ipsam sit iste corrupti delectus
              accusamus? Vel magni nesciunt eius fuga voluptas. Quasi sapiente
              nobis earum? Quasi rerum natus molestias rem doloremque pariatur,
              perspiciatis earum numquam magni, qui tempore! Eligendi minima
              accusantium reprehenderit? Dicta saepe tempora ratione aliquid
              possimus? Molestias, atque quidem. Earum recusandae, adipisci
              molestiae vitae minus officia soluta accusantium placeat commodi
              delectus hic quisquam, laborum nihil consequatur illo. Quas neque
              beatae asperiores excepturi facere. Repellat, distinctio! Odit
              officiis ea enim? Praesentium laborum nemo veritatis, quas
              nesciunt illum inventore esse earum, repellat iste velit soluta
              ratione tenetur assumenda veniam eum eaque! Nesciunt libero
              deserunt temporibus officiis eos. Aperiam voluptatum quod magni!
              Hic laborum accusantium quo consectetur voluptatum voluptatibus
              nisi perspiciatis similique sint, autem amet ex totam. Ea tenetur
              temporibus nemo laborum repellat ad omnis, repellendus eum
              voluptates, id expedita eveniet dolor? Fugiat animi itaque quidem,
              tempora voluptatum nihil quae voluptatem nemo vel consequuntur
              doloribus illum adipisci rem nobis error minus, blanditiis, quam
              quis placeat! Saepe numquam repudiandae itaque aliquid ratione
              molestiae! Ea sapiente vel sed nulla molestias sunt quis, velit
              dolores quasi deserunt eius exercitationem eos et porro delectus
              tempore quae omnis asperiores impedit aliquid minima voluptate
              accusamus. Quis, laborum tempore! Vel odio voluptate praesentium
              cupiditate ratione modi, deserunt repellendus quis fugit dolor!
              Blanditiis quaerat rem vitae sed qui obcaecati reiciendis
              repudiandae, deserunt iste quam incidunt aspernatur sapiente? Eum,
              in saepe. Quaerat odio numquam officia sunt, non unde magnam
              dignissimos, cum placeat, dolore cumque ex magni error aspernatur
              quae officiis? Numquam aut nostrum delectus sed unde soluta
              placeat laborum praesentium enim. A consequatur commodi amet,
              explicabo, delectus perspiciatis similique, eveniet porro iusto
              sapiente in neque quae nostrum dicta tempora possimus sunt
              doloremque quos exercitationem vero. Magnam iste dolorum sed animi
              nobis! Rerum perferendis adipisci doloremque repellat! Nulla
              deleniti tenetur recusandae accusamus eum molestias officiis a
              asperiores quidem est reiciendis dolores similique provident id
              amet placeat distinctio cupiditate, dignissimos nesciunt
              inventore. Illo? Culpa deserunt quos maiores consectetur.
              Quibusdam unde ea modi consequatur repellat quae facere
              perspiciatis illo doloremque praesentium ipsam blanditiis, iste
              tenetur voluptatem pariatur, possimus minima impedit voluptate!
              Sapiente, perspiciatis ea! Rem nemo dolores culpa ducimus laborum.
              Reprehenderit dicta, rerum, amet officia quae iste, eos pariatur
              commodi itaque assumenda voluptates facere veniam aliquid
              perferendis voluptas! Nobis ipsum quas ea totam magni. Libero
              ratione eaque sint, non, iusto molestiae totam doloremque
              praesentium harum porro, magnam cupiditate natus. Nesciunt officia
              aut sunt repudiandae. Velit ut quisquam deleniti dolores, quos
              laudantium! Reiciendis, odio sit!
            </div>
          )}
          {linkActive === 2 && <div>2</div>}
          {linkActive === 3 && <div>3</div>}
          {linkActive === 4 && <div>4</div>}
          {linkActive === 5 && <div>5</div>}
        </div>
      </div>
    </div>
  );
}

export default CodeBoard;
