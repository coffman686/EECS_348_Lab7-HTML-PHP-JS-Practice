<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['size'])) {
        $size = intval($_POST['size']);
        if ($size > 0) {
            echo "<h2>Multiplication Table of Size $size</h2>";
            echo "<table>";
            echo "<tr><th>*</th>";
            for ($i = 1; $i <= $size; $i++) {
                echo "<th>$i</th>";
            }
            echo "</tr>";
            for ($row = 1; $row <= $size; $row++) {
                echo "<tr><th>$row</th>";
                for ($col = 1; $col <= $size; $col++) {
                    echo "<td>" . ($row * $col) . "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<p>Please enter a positive integer.</p>";
        }
    }
    ?>