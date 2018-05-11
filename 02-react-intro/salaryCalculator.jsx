<section>
	<div className="field">
		<label htmlFor="">Basic :</label>
		<input type="number" id="txtBasic" />
	</div>
	<div className="field">
		<label htmlFor="">HRA :</label>
		<input type="number" id="txtHra" />
	</div>
	<div className="field">
		<label htmlFor="">DA :</label>
		<input type="number" id="txtDa" />
	</div>
	<div className="field">
		<label htmlFor="">Tax :</label>
		<input type="range" id="rangeTax" min="0" max="30" />
	</div>
	<div className="field">
		<input type="button" value="Calculate" id="btnCalculate" />
	</div>
	<div className="field">
		<table>
			<tbody>
				<tr>
					<td id="tdBasic">[Basic]</td>
					<td id="tdHra">[HRA]</td>
					<td id="tdDa">[Da]</td>
					<td id="tdTax">[Tax]</td>
					<td id="tdSalary">[Salary]</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>