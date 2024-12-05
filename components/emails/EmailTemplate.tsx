import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Link } from '@react-email/components';

interface EmailTemplateProps {
  email: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ email }) => {
  return (
    <Html>
      <Head />
      <Preview>Bestätigen Sie Ihr Abonnement für unseren Newsletter</Preview>
      <Body className="bg-gray-100 text-gray-900">
        <Container className="bg-white rounded-lg shadow p-6">
          <Heading className="text-xl font-bold mb-4">Willkommen zu unserem Newsletter !</Heading>
          <Text className="mb-4">Hallo, vielen Dank für Ihre Registrierung !</Text>
          <Text className="mb-4">Bitte bestätigen Sie Ihr Abonnement, indem Sie auf den untenstehenden Link klicken :</Text>
          <Link href={`http://localhost:3000/subscription?email=${email}`} className="text-blue-600 underline">
          Abonnement bestätigen
</Link>

          <Text className="mt-6 text-gray-600">Wenn Sie sich noch nicht registriert haben, ignorieren Sie diese E-Mail bitte.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;