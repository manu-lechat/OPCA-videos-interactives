<?php include ('header.php'); ?>
	<div class="barba-container page_container game4 game4f" data-namespace="game4">


		<video src="videos/4part1.mp4"></video>

		<img src="img/game4f1.svg">
		<img src="img/game4f2.svg" id="reponses">


		<ul class="qcm_container qcm_multiple" id="q5">
			<li istrue='false'><div></div></li>
			<li istrue='true'><div></div></li>
			<li istrue='true'><div></div></li>
			<li istrue='false'><div></div></li>
		</ul>

		
		<!-- bouton 1 : bt_reponse_container -->
		<div class="bt_bc_container " id="bt_reponse_container"><a href="#" class="bt_validez bt_reponse" id="bt_reponse"></a></div>	

		<!-- bouton 2 : bt_qcm_container -->
		<div class="bt_bc_container  displayNone" id="bt_qcm_container"><a href="#" class="bt_continuez bt_qcm " id="bt_final"></a></div>
			
	</div>
<?php include ('footer.php'); ?>