import {Helmet} from "react-helmet";

type Props = {
  ga4MeasurementId: string;
}

export function HelmetGa4({ga4MeasurementId}: Props) {
  return (
    <>
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", "${ga4MeasurementId}", { send_page_view: true });
          `}
        </script>
      </Helmet>
    </>
  )
}
