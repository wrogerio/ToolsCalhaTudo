alturaUnicial = float(input("Digite a altura inicial: "))
alturaFinal = float(input("Digite a altura final: "))
largura = float(input("Digite o comprimento: "))
LarguraDasFatias = float(input("Digite o comprimento das fatias: "))
diferencaDeAltura = alturaUnicial - alturaFinal
encaixeEntreChapas = alturaUnicial != alturaFinal and 0.1 or 0

listaDeAlturas = []

# calcular a quantidade de fatias que podem ser obtidas
quantidadeDeFatias = float(largura / LarguraDasFatias)
sobraDeChapa = largura % LarguraDasFatias

for i in range(1, int(quantidadeDeFatias) + 1):
    AlturaParteMaisFina = alturaUnicial - diferencaDeAltura * (i / quantidadeDeFatias)
    AlturaParteMaisGrossa = alturaUnicial - diferencaDeAltura * ((i - 1) / quantidadeDeFatias)

    listaDeAlturas.append([AlturaParteMaisGrossa, AlturaParteMaisFina])
    #print("Na chapa ", i, " a altura começa em ", AlturaParteMaisGrossa, "cm e termina em ", AlturaParteMaisFina, "cm")

if sobraDeChapa > 0:
    AlturaParteMaisGrossa = AlturaParteMaisFina - encaixeEntreChapas
    AlturaParteMaisFina = alturaFinal
    listaDeAlturas.append([AlturaParteMaisGrossa, AlturaParteMaisFina])
    
for i in range(0, len(listaDeAlturas)):
    if i > 0 and i < len(listaDeAlturas) - 1:
        listaDeAlturas[i][0] = round(listaDeAlturas[i][0] - encaixeEntreChapas * i, 3)
        listaDeAlturas[i][1] = round(listaDeAlturas[i][1] - encaixeEntreChapas * i, 3)
    elif i == len(listaDeAlturas) - 1:
        listaDeAlturas[i][0] = round(listaDeAlturas[i][0] - encaixeEntreChapas * (i - 1), 3)


for i in range(0, len(listaDeAlturas)):
    # show message with 3 decimal places
    
    if(i < len(listaDeAlturas) - 1):
        print("A chapa", i+1, "tem ", LarguraDasFatias, "cm de largura, comeca com" , round(listaDeAlturas[i][0], 2), "cm e termina com", round(listaDeAlturas[i][1], 2), "cm")
    elif i == len(listaDeAlturas) - 1:
        print("A chapa", i+1, "tem ", sobraDeChapa, "cm de largura, comeca com" , round(listaDeAlturas[i][0], 2), "cm e termina com", round(listaDeAlturas[i][1], 2), "cm")

