<?php include ('header.php'); ?>
	<div class="barba-container page_container game3 game3d" data-namespace="game3">

		<video src="videos/3part3.mp4" ></video>

		<img src="img/game3d1.svg" id="step1">
		<img src="img/game3d2.svg"  id="reponses" >



		<ul class="qcm_container qcm_multiple" id="q3">
			<li istrue='true'><div></div></li>
			<li istrue='false'><div></div></li>
			<li istrue='false'><div></div></li>
		</ul>

		
		<!-- bouton 1 : bt_reponse_container -->
		<div class="bt_bc_container " id="bt_reponse_container"><a href="#" class="bt_validez bt_reponse" id="bt_reponse"></a></div>	

		<!-- bouton 2 : bt_qcm_container -->
		<div class="bt_bc_container  displayNone" id="bt_qcm_container"><a href="3e_Trouver_la_bonne_formule.php" class="bt_continuez bt_qcm " id="bt_qcm"></a></div>
		
	</div>
<?php include ('footer.php'); ?>