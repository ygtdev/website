<?php
/**
 *  Ali ŞEN tarafından oluşturuldu.
 *  Date: 4.06.2020
 *  Time: 20:38
 *  Project: FiveM
 **/

$settings['title'] = "Sunucu adı";
$settings['ip'] = "000.000.000.000"; // Sunucu Ip'si
$settings['port'] = "30120"; // Standart port 30120 olmalı (eğer değiştirilmediyse)
$settings['max_slots'] = 128; // Kullanıcı slotu (Varsayılan 32)

@$content = json_decode(file_get_contents("http://".$settings['ip'].":".$settings['port']."/info.json"), true);
@$img_d64 = $content['icon'];
?>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title><?= $settings['title'] ?> | Sunucu Durumu</title>
</head>
<body class="bg-dark">
<style>

</style>
<div class="container">
    <div class="row justify-content-center pt-5">
        <div class="col-md-6">
            <div class="card">

                <div class="pb-5 text-center">
                    <?php if($content) {
                    $gta5_players = file_get_contents("http://".$settings['ip'].":".$settings['port']."/players.json");
                    $content = json_decode($gta5_players, true);
                    $pl_count = count($content);
                        ?>

                        <img  width="150" src="data:image/png;base64, <?= $img_d64 ?>"></div>
                <center><p class="text-success"><b><?= $settings['title'] ?></b></p></center>
                <center><div class="pl-5 pr-5"> <hr> </div>
                        <p>Oyuncu istatistiği <b><?= $pl_count ?></b>/<b><?= $settings['max_slots'] ?></b></p>
                        <p class="text-success"><b>Sunucu Durumu:</b></p>
                        <button class="btn btn-success">
                            Açık
                        </button></center>

                <?php }else {
                       ?>
                    <img src="img/offline.png" width="150" alt="offline">
                <p class="text-danger"><b><?= $settings['title'] ?></b></p>
                <div class="pl-5 pr-5"> <hr> </div>
                <p>Oyuncu istatistiği <b>00</b>/<b><?= $settings['max_slots'] ?></b></p>
                <p class="text-danger"><b>Sunucu Durumu:</b></p>
                <button class="btn btn-danger">
                    Kapalı
                </button>
                        <?php
                } ?>
                </div>

            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>

