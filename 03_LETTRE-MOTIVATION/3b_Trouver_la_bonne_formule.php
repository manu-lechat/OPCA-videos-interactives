<?php include ('header.php'); ?>
	<div class="barba-container page_container game3 game3b" data-namespace="game3">

		<video src="videos/3part1.mp4" ></video>

		<img src="img/game3b1.svg" id="step1">
		<img src="img/game3b2.svg" id="reponses" >


		<ul class="qcm_container qcm_multiple" id="q1">
			<li istrue='false'><div></div></li>
			<li istrue='true'><div></div></li>
			<li istrue='true'><div></div></li>
		</ul>

		<!-- bouton 1 : bt_reponse_container -->
		<div class="bt_bc_container " id="bt_reponse_container"><a href="#" class="bt_validez bt_reponse" id="bt_reponse"></a></div>	

		<!-- bouton 2 : bt_qcm_container -->
		<div class="bt_bc_container  displayNone" id="bt_qcm_container"><a href="3c_Trouver_la_bonne_formule.php" class="bt_continuez bt_qcm " id="bt_qcm"></a></div>
		


	</div>
<?php include ('footer.php'); ?>