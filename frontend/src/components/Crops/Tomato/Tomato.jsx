import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import '../Coffe.css'
const Tomato = () => {
  const [back,setBack] = useState(false);
  if(back){
    return <Navigate to={`/crops`} replace />
}
  return (
    <div>
   <button className="mt-16 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>setBack(true)}>Back</button>
      <div class="container">
        <table class="products-4">
          <thead>
            <tr>
              <th class="label">&nbsp;</th>
              <th>
                <img src="https://via.placeholder.com/80x100" alt="" />
                <h3>Tomato</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="heading" colspan="5">
                <span>Price Outlook</span>
              </td>
            </tr>
            <tr>
              <td class="label">Monthly Price Outlook </td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="label"> Quarterly Price Outlook</td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="label"> Seasonal Price Outlook</td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="heading" colspan="5">
                <span>Summery & Review</span>
              </td>
            </tr>
            <tr>
              <td class="label">Monthly Summery & Review</td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Quarterly Summery & Review</td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Seasonal Summery & Review</td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="heading" colspan="5">
                <span>Bull & Bear Factor</span>
              </td>
            </tr>
            <tr>
              <td class="label">Monthly Bull & Bear Factor </td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Quarterly Bull & Bear Factor </td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Seasonal Bull & Bear Factor </td>
              <td>
                <div class="spec" spec-title="Label">
                  When the user clicks on the widget or focuses it then presses
                  the space bar, it "twists" open, revealing its contents. The
                  common use of a triangle which rotates or twists around to
                  represent opening or closing the widget is why these are
                  sometimes.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tomato;
