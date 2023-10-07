import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize } from "../style/GlobalStyles";

const FlyingWellSearch = () => {
  return (
    <View style={styles.flyingwellSearch}>
      <View
        style={[styles.contenedorPrincipal, styles.contenedorPrincipalPosition]}
      />
      <View
        style={[
          styles.flyingwellSearchChild,
          styles.contenedorPrincipalPosition,
        ]}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={styles.frame}>
        <Image
          style={styles.fwLogoIcon}
          contentFit="cover"
          source={require("../assets/fw-logo.png")}
        />
      </View>
      <View style={[styles.content, styles.contentPosition]}>
        <Image
          style={styles.searchLightIcon}
          contentFit="cover"
          source={require("../assets/search-light.png")}
        />
        <View style={styles.magnifyingglass}>
          <Text style={styles.magnifyingglass1}>􀊫</Text>
        </View>
        <Text style={styles.seleccionaTuOrigen}>Selecciona tu Origen</Text>
      </View>
      <View style={[styles.content1, styles.contentPosition]}>
        <Image
          style={styles.searchLightIcon}
          contentFit="cover"
          source={require("../assets/search-light.png")}
        />
        <View style={styles.magnifyingglass}>
          <Text style={styles.magnifyingglass1}>􀊫</Text>
        </View>
        <Text style={styles.seleccionaTuOrigen}>Selecciona tu Destino</Text>
      </View>
      <View style={styles.frame1}>
        <Text style={[styles.aDondeQuieres, styles.idaTypo]}>
          ¿ A donde quieres viajar?
        </Text>
      </View>
      <Image
        style={styles.frameIcon2}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <View style={styles.frame2}>
        <Text
          style={[styles.idaYVuelta, styles.idaTypo]}
        >{`Ida y vuelta `}</Text>
      </View>
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={styles.frame3}>
        <Text style={[styles.soloIda, styles.idaTypo]}>{`Solo ida `}</Text>
      </View>
      <View style={styles.frame4}>
        <View style={styles.frameLayout} />
      </View>
      <View style={[styles.frame5, styles.framePosition1]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame6.png")}
      />
      <View style={[styles.frame6, styles.framePosition]}>
        <Text style={[styles.fechaIda, styles.fechaTypo]}>{`Fecha ida
`}</Text>
      </View>
      <View style={[styles.frame7, styles.framePosition1]}>
        <View style={styles.frameInner} />
      </View>
      <View style={[styles.frame8, styles.framePosition1]}>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.frame9}>
        <Text style={[styles.adulto, styles.fechaTypo]}>{`1 Adulto
`}</Text>
      </View>
      <View style={[styles.frame10, styles.framePosition]}>
        <Text style={[styles.fechaVuelta, styles.fechaTypo]}>{`Fecha vuelta
`}</Text>
      </View>
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <Image
        style={styles.frameIcon8}
        contentFit="cover"
        source={require("../assets/frame8.png")}
      />
      <View style={styles.frame11}>
        <Text style={[styles.buscarVuelos, styles.fechaTypo]}>{`Buscar vuelos`}</Text>
      </View>
      <View style={[styles.flyingwellSearchItem, styles.adultoPosition]} />
      <Image
        style={[styles.frameIcon9, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <Image
        style={styles.frameIcon10}
        contentFit="cover"
        source={require("../assets/frame10.png")}
      />
      <Image
        style={[styles.frameIcon11, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame11.png")}
      />
      <Image
        style={[styles.frameIcon12, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipalPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
    width: '100%',
  },
  adultoPosition: {
    left: 0,
    position: "absolute",
  },
  contentPosition: {
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    top: "50%",
    marginLeft: -130,
    height: 30,
    width: 260,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  idaTypo: {
    height: 17,
    color: Color.colorBlack,
    lineHeight: 42,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  frameIconLayout: {
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition1: {
    width: 264,
    left: 35,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 127,
    height: 30,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
  },
  framePosition: {
    top: 233,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  fechaTypo: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  frameIconPosition: {
    top: 597,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  contenedorPrincipal: {
    top: 0,
    height: '100%',
  },
  frameIcon: {
    width: 338,
    height: 23,
    top: 0,
    overflow: "hidden",
  },
  flyingwellSearchChild: {
    top: 25,
    height: 44,
  },
  frameIcon1: {
    top: 33,
    left: -15,
    width: '100%',
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  fwLogoIcon: {
    width: '40%',
    height: 44,
  },
  frame: {
    top: 23,
    left: 1,
    width: '100%',
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  searchLightIcon: {
    width: 24,
    height: 24,
  },
  magnifyingglass1: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_lg,
    lineHeight: 50,
    fontWeight: "500",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorsLCLSecondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  magnifyingglass: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  seleccionaTuOrigen: {
    flex: 1,
    textAlign: "left",    
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    color: Color.labelColorsLCLSecondary,
  },
  content: {
    marginTop: -215.5,
  },
  content1: {
    marginTop: -155.5,
  },
  aDondeQuieres: {
    width: 138,
  },
  frame1: {
    top: 74,
    left: -26,
    width: 282,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    top: 130,
    left: 145,
    width: 44,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon3: {
    left: 97,
    width: 140,
    top: 200,
  },
  idaYVuelta: {
    width: 66,
  },
  frame2: {
    left: 117,
    width: 100,
    top: 200,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon4: {
    left: 131,
    width: 72,
    top: 200,
  },
  soloIda: {
    width: 49,
  },
  frame3: {
    left: 77,
    width: 180,
    alignItems: "flex-end",
    top: 200,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    left: 37,
    top: 230,
    width: 260,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    left: 137,
    top: 0,
    position: "absolute",
  },
  frame5: {
    top: 230,
    height: 30,
  },
  frameIcon5: {
    top: 236,
    left: 50,
    width: 234,
  },
  frameIcon6: {
    top: 238,
    left: 138,
    width: 58,
  },
  fechaIda: {
    width: 82,
    height: 18,
    color: Color.labelColorsLCLSecondary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  frame6: {
    left: 69,
    width: 196,
  },
  frameInner: {
    height: 30,
    width: 260,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
  },
  frame7: {
    top: 280,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rectangleView: {
    left: 4,
    backgroundColor: "#3e39bf",
    height: 30,
    width: '100%',
    top: 0,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  frame8: {
    top: 330,
    height: 30,
  },
  adulto: {
    width: 89,
    height: 18,
    color: Color.labelColorsLCLSecondary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
    top: 0,
  },
  frame9: {
    top: 285,
    left: 65,
    width: 204,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  fechaVuelta: {
    width: 91,
    height: 19,
    color: Color.labelColorsLCLSecondary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  frame10: {
    left: 42,
    width: 250,
    alignItems: "flex-end",
  },
  frameIcon7: {
    top: 288,
    left: 55,
    width: 224,
  },
  frameIcon8: {
    top: 283,
    left: 39,
    width: 256,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  buscarVuelos: {
    left: 10,
    color: Color.colorWhite,
    height: 30,
    width: 260,
    top: 0,
    position: "absolute",
  },
  frame11: {
    top: 333,
    left: 32,
    width: 270,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  flyingwellSearchItem: {
    top: 587,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: "#2b278c",
    height: 44,
    width: 334,
  },
  frameIcon9: {
    left: 111,
    width: 112,
  },
  frameIcon10: {
    top: 596,
    left: 23,
    width: 288,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon11: {
    left: 41,
    width: 252,
  },
  frameIcon12: {
    left: 113,
    width: 108,
  },
  flyingwellSearch: {
    backgroundColor: "#382d2d",
    overflow: "hidden",
    height: '100%',
    width: '100%',
    borderRadius: Border.br_3xs,
  },
});

export default FlyingWellSearch;
