<?php include ('header.php'); ?>
	<div class="barba-container page_container game4 game4e" data-namespace="game4">


		<video src="videos/4part1.mp4"></video>

		<img src="img/game4e1.svg">
		<img src="img/game4e2.svg" id="reponses">


		<ul class="qcm_container" id="q4">
			<li istrue='true'><div></div></li>
			<li istrue='false'><div></div></li>
			<li istrue='false'><div></div></li>
		</ul>

		
		<!-- bouton 1 : bt_reponse_container -->
		<div class="bt_bc_container " id="bt_reponse_container"><a href="#" class="bt_validez bt_reponse" id="bt_reponse"></a></div>	

		<!-- bouton 2 : bt_qcm_container -->
		<div class="bt_bc_container  displayNone" id="bt_qcm_container"><a href="4f_Les-atouts.php" class="bt_continuez bt_qcm " id="bt_qcm"></a></div>
			
	</div>
<?php include ('footer.php'); ?>