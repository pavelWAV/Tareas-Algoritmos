/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package seriegregoryleibniz;

import java.util.Scanner;

public class SerieGregoryLeibniz {

    // Función que calcula el valor aproximado de PI
    public static double calcularPi(int n) {

        double pi = 0;
        double denominador = 1;
        int numerador;

        for (int i = 0; i < n; i++) {

            // Determinar si el término es positivo o negativo
            if (i % 2 == 0) {
                numerador = 1;
            } else {
                numerador = -1;
            }

            // Sumar el término a PI
            pi = pi + ((double) numerador / denominador);

            // El denominador aumenta de 2 en 2
            denominador = denominador + 2;
        }

        // La serie calcula PI/4, por eso multiplicamos por 4
        pi = pi * 4;

        return pi;
    }

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        System.out.println("=================================");
        System.out.println("     SERIE DE GREGORY-LEIBNIZ");
        System.out.println("=================================");

        System.out.print("Ingrese el numero de terminos: ");
        int n = entrada.nextInt();

        double resultado = calcularPi(n);

        System.out.println();
        System.out.println("Valor aproximado de PI:");
        System.out.println(resultado);

        entrada.close();
    }
}

//FIN DEL PROGRAMA 
